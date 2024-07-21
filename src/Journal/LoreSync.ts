import { OgBaseModule } from '../IModule';
import { registerGameExtensions } from '../utils';

export class LoreSyncModule extends OgBaseModule {
    public get name(): string {
        return 'LoreSync';
    }
    private loreFolder = new JournalSync('Lore');
    private questFolder = new JournalSync('Quests');
    private sharedFolder = new JournalSync('Shared');

    public override ready(): void {
        // @ts-ignore
        const getTopFolders = () => game.folders.filter((x: { depth: number; type: string }) => x.type == 'JournalEntry' && x.depth == 1);
        const getSubFolders = (parentFolder: { children: Array<{ children: Array<{ depth: number; folder: { name: string } }> }> }) => {
            if (parentFolder.children.length > 0) {
                // @ts-ignore
                return parentFolder.children.map((c: { folder: { name: string } }) => new JournalSync(c.folder.name));
            }
            return [];
        };
        // Console usage:
        // var f = game.og.journalSync.getTopFolders()[3];
        // game.og.journalSync.getSubFolders(f)[0];

        registerGameExtensions('journalSync', {
            getTopFolders: getTopFolders,
            getSubFolders: getSubFolders,
            lore: {
                getFolder: this.loreFolder.getFolder,
                folderExists: this.loreFolder.folderExists,
                getJournalEntries: this.loreFolder.getJournalEntries,
                getPages: this.loreFolder.getPages,
                getPageObjects: this.loreFolder.getPageObjects,
            },
            quests: {
                getFolder: this.questFolder.getFolder,
                folderExists: this.questFolder.folderExists,
                getJournalEntries: this.questFolder.getJournalEntries,
                getPages: this.questFolder.getPages,
                getPageObjects: this.questFolder.getPageObjects,
            },
            shared: {
                getFolder: this.sharedFolder.getFolder,
                folderExists: this.sharedFolder.folderExists,
                getJournalEntries: this.sharedFolder.getJournalEntries,
                getPages: this.sharedFolder.getPages,
                getPageObjects: this.sharedFolder.getPageObjects,
            },
        });
    }
}

class JournalSync {
    private folder: any = undefined;
    constructor(private folderName: string) {}

    getFolder = () => {
        if (this.folder === undefined) {
            // @ts-ignore
            this.folder = game.folders.find((x: { name: string; type: string }) => x.name == this.folderName && x.type == 'JournalEntry');
        }
        return this.folder;
    };
    folderExists = () => this.getFolder() !== undefined;
    getJournalEntries = () => {
        const folderId = this.getFolder()._id;
        // @ts-ignore
        return game.journal.filter((j: { _source: { folder: any } }) => j._source.folder === folderId);
    };
    getPages = () =>
        this.getJournalEntries()
            .map((j: { pages: any }) => [...j.pages])
            .flat();
    getPageObjects = (): PageContent[] => {
        return this.getPages().map((p: { _id: any; name: any; text: { content: any }; title: { level: number; show: boolean } }) => {
            return {
                id: p._id,
                name: p.name,
                content: p.text.content,
                title: {
                    level: p.title.level,
                },
                ref: p,
            };
        });
    };
}

export interface PageContent {
    id: string;
    name: string;
    content: string;
}
