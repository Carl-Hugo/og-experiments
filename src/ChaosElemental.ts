import { OgBaseModule } from './IModule';
import { registerGameExtensions } from './utils';

export class ChaosElemental extends OgBaseModule {
    public get name(): string {
        return 'ChaosElemental';
    }

    public override ready(): void {
        const tokenId = 'aXi4DRE5JhxQvWFl';
        const tableId = '5jfwDOTBmXa88fzY';

        // Event listener for chat messages
        Hooks.on('renderChatMessage', (message, html, data) => {
            // Event handler for "Try the chaos" button
            html.on('click', '.roll-the-chaos', async (event) => {
                event.preventDefault();

                // Ensure only one user can click the button
                // @ts-ignore
                if (!game.user.isGM && message.user.id !== game.user.id) return;

                // Roll a d100
                let roll = await new Roll('1d100').roll({ async: true });

                // Send the roll result to chat
                await roll.toMessage({
                    speaker: { token: tokenId },
                    flavor: "Trying the chaos...<p>Let's see if the Chaos Elemental changes form (50% chance)!</p>",
                });

                // Delete the chat message containing the button
                await message.delete();

                // If the result is under 50, create the new chat message with the next button
                if (roll.total < 50) {
                    const chatContent = `<button class="roll-next-chaos">What will be my next form?</button>`;
                    ChatMessage.create({
                        content: chatContent,
                        speaker: { token: tokenId },
                        flavor: 'Roll what the next form of the Chaos Elemental will be...',
                    });
                } else {
                    // Send a new chat message saying that nothing happens
                    ChatMessage.create({
                        content: 'Nothing happens.',
                        speaker: { token: tokenId },
                    });
                }
            });

            // Event handler for "Roll the next Chaos Elemental Form" button
            html.on('click', '.roll-next-chaos', async (event) => {
                event.preventDefault();

                // Ensure only one user can click the button
                // @ts-ignore
                if (!game.user.isGM && message.user.id !== game.user.id) return;

                // Delete the chat message containing the button
                await message.delete();

                // Roll on the roll table
                // @ts-ignore
                const table = game.tables.get(tableId);
                if (table) {
                    await table.draw({ rollMode: 'roll', speaker: { token: tokenId } });
                } else {
                    // @ts-ignore
                    ui.notifications.warn(`RollTable with ID "${tableId}" not found.`);
                }
            });

            // Hook to create the button at the beginning of each new combat round
            // @ts-ignore
            Hooks.on('updateCombat', (combat, updateData, options, userId) => {
                // @ts-ignore
                if (game.user.isGM && 'round' in updateData) {
                    // Ensure the token exists in the current scene
                    // @ts-ignore
                    const token = canvas.tokens.get(tokenId);
                    if (token) {
                        // Create the chat message with the "Try the chaos" button
                        const chatContent = `<button class="roll-the-chaos">Try the chaos</button>`;
                        ChatMessage.create({
                            content: chatContent,
                            speaker: { token: tokenId },
                        });
                    }
                }
            });
        });

        registerGameExtensions('chaosElemental', {
            showButton: function (tokenId: string) {
                // Create the initial chat message with the "Try the chaos" button
                const chatContent = `<button class="roll-the-chaos">Try the chaos</button>`;

                ChatMessage.create({
                    content: chatContent,
                    speaker: { token: tokenId },
                });
            },
        });
    }
}
