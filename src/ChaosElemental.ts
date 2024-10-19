// @ts-nocheck
import { OgBaseModule } from './IModule';
import { OgExperiment } from './OgExperiments';
import { registerGameExtensions } from './utils';

const foundryModuleEventName = `module.${OgExperiment.namespace}`;

export class ChaosElemental extends OgBaseModule {
    public get name(): string {
        return 'ChaosElemental';
    }

    public override ready(): void {
        const tokenId = 'aXi4DRE5JhxQvWFl';
        const tableId = '5jfwDOTBmXa88fzY';
        const tokenAlias = 'Chaos Elemental';

        // Event listener for chat messages
        Hooks.on('renderChatMessage', (message, html, data) => {
            // Event handler for "Try the chaos" button
            html.on('click', '.roll-the-chaos', async (event) => {
                event.preventDefault();

                // Roll a d100
                let roll = await new Roll('1d100').roll({ async: true });

                // Create the speaker object
                const speaker = { alias: tokenAlias };

                // Send the roll result to chat
                await roll.toMessage({
                    speaker: speaker,
                    flavor: "Trying the chaos...<p>Let's see if the Chaos Elemental changes form (50% chance)!</p>",
                });

                // Request the GM to delete the chat message containing the button
                game.socket.emit(foundryModuleEventName, {
                    action: 'deleteMessage',
                    messageId: message.id,
                });

                // If the result is under 50, create the new chat message with the next button
                if (roll.total < 50) {
                    const chatContent = `<button class="roll-next-chaos">What will be my next form?</button>`;
                    ChatMessage.create({
                        content: chatContent,
                        speaker: speaker,
                        flavor: 'Roll what the next form of the Chaos Elemental will be...',
                    });
                } else {
                    // Send a new chat message saying that nothing happens
                    ChatMessage.create({
                        content: 'Nothing happens.',
                        speaker: speaker,
                    });
                }
            });

            // Event handler for "Roll the next Chaos Elemental Form" button
            html.on('click', '.roll-next-chaos', async (event) => {
                event.preventDefault();

                // Request the GM to delete the chat message containing the button
                game.socket.emit(foundryModuleEventName, {
                    action: 'deleteMessage',
                    messageId: message.id,
                });

                // Create the speaker object
                const speaker = { alias: tokenAlias };

                // Roll on the roll table
                const table = game.tables.get(tableId);
                if (table) {
                    await table.draw({ rollMode: 'roll', speaker: speaker });
                } else {
                    ui.notifications.warn(`RollTable with ID "${tableId}" not found.`);
                }
            });
        });

        // Hook to create the button at the beginning of each new combat round
        Hooks.on('updateCombat', (combat, updateData, options, userId) => {
            if (game.user.isGM && 'round' in updateData) {
                // Create the speaker object
                const speaker = { alias: tokenAlias };

                // Create the chat message with the "Try the chaos" button
                const chatContent = `<button class="roll-the-chaos">Try the chaos</button>`;
                ChatMessage.create({
                    content: chatContent,
                    speaker: speaker,
                    flavor: "A new round has begun, let's see if the Chaos Elemental changes its form!",
                });
            }
        });

        // Socket listener for the GM to delete messages
        if (game.user.isGM) {
            game.socket.on(foundryModuleEventName, async (data) => {
                this.logDebug(foundryModuleEventName, data);
                if (data.action === 'deleteMessage') {
                    this.logDebug('module.chaos-elemental deleteMessage messageId: ', data.messageId);
                    let message = game.messages.get(data.messageId);
                    this.logDebug('module.chaos-elemental deleteMessage message: ', message);
                    if (message) {
                        await message.delete();
                    }
                }
            });
        }

        registerGameExtensions('chaosElemental', {
            showButton: function (tokenId: string) {
                // Create the speaker object
                const speaker = { alias: tokenAlias };

                // Create the initial chat message with the "Try the chaos" button
                const chatContent = `<button class="roll-the-chaos">Try the chaos</button>`;

                ChatMessage.create({
                    content: chatContent,
                    speaker: speaker,
                });
            },
        });
    }
}
