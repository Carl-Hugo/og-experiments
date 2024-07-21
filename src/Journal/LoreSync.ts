import { OgBaseModule } from '../IModule';
import { registerGameExtensions } from '../utils';
import { JournalPickerApplication } from './JournalPickerApplication';

export class LoreSyncModule extends OgBaseModule {
    public get name(): string {
        return 'LoreSync';
    }
    private loreFolder = new JournalSync('Lore');
    private questFolder = new JournalSync('Quests');
    private sharedFolder = new JournalSync('Shared');

    private journalPickerWindow: JournalPickerApplication | undefined;

    override init(): void {
        // Handlebars.registerPartial('folder', Handlebars.templates['folder-template']);
    }

    public override ready(): void {
        registerGameExtensions('journalSync', {
            getFolderTree: getFolderTree,
            getTopFolders: getTopFolders,
            getSubFolders: getSubFolders,
            getFolderByName: getFolderByName,
            getFolderById: getFolderById,
            getJournalEntriesInFolder: getJournalEntriesInFolder,
            getPagesinJournalEntry: getPagesinJournalEntry,
            mapper: mapper,
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
            journalPicker: {
                open: () => this.journalPickerWindow?.render(true),
            },
        });
        this.journalPickerWindow = new JournalPickerApplication(
            {
                rootFolders: getFolderTree(),
            },
            undefined,
            this.logger
        );
        this.journalPickerWindow.render(true);
    }
}

class JournalSync {
    private folder: any = undefined;
    constructor(private folderName: string) {}

    getFolder = () => {
        if (this.folder === undefined) {
            // @ts-ignore
            //this.folder = game.folders.find((x: { name: string; type: string }) => x.name == this.folderName && x.type == 'JournalEntry');
            this.folder = getFolderByName(this.folderName);
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

// Console usage:
// var f = game.og.journalSync.getTopFolders()[3];
// game.og.journalSync.getSubFolders(f)[0];
//
// OR
// var topFolders = game.og.journalSync.getTopFolders()
// game.og.journalSync.mapper.foundry.toFolder(topFolders[3])
// topFolders.map(f => game.og.journalSync.mapper.foundry.toFolder(f))
//
// OR
// game.og.journalSync.getFolderTree()

const getFolderTree = () => {
    var topFolders = getTopFolders();
    return topFolders.map((f: any) => mapper.foundry.toFolder(f));
};

// @ts-ignore
const getTopFolders = () => game.folders.filter((x: { depth: number; type: string }) => x.type == 'JournalEntry' && x.depth == 1);

const getFolderByName = (folderName: string) => {
    // @ts-ignore
    return game.folders.find((x: { name: string; type: string }) => x.name == folderName && x.type == 'JournalEntry');
};
const getFolderById = (folderId: string) => {
    // @ts-ignore
    return game.folders.find((x: { id: string; type: string }) => x.id == folderId && x.type == 'JournalEntry');
};

const getSubFolders = (folder: { children: Array<{ children: Array<{ depth: number; folder: { name: string } }> }> }) => {
    return folder.children;
};

const getJournalEntriesInFolder = (folder: { contents: Array<any> }) => {
    if (folder.contents) {
        return folder.contents;
    }
    return [];
};
const getPagesinJournalEntry = (journalEntry: any) => journalEntry.pages;

const toPageContent = (journalEntryPage: any) => {
    return {
        id: journalEntryPage.id,
        name: journalEntryPage.name,
        content: journalEntryPage.text.content,
        title: {
            level: journalEntryPage.title.level,
        },
        ref: journalEntryPage,
    } as PageContent;
};
const toJournal = (journalEntry: any) => {
    return {
        id: journalEntry.id,
        name: journalEntry.name,
        pages: getPagesinJournalEntry(journalEntry).map((p: any) => toPageContent(p)),
        ref: journalEntry,
    } as Journal;
};
const toFolder = (folder: any): Folder => {
    var folderToMap = folder;
    if (folder.folder) {
        folderToMap = folder.folder;
    }
    return {
        id: folderToMap.id,
        name: folderToMap.name,
        subfolders: getSubFolders(folderToMap).map((f: any) => toFolder(f)),
        entries: getJournalEntriesInFolder(folderToMap).map((e: any) => toJournal(e)),
        ref: folder,
    } as Folder;
};
const mapper = {
    foundry: {
        toPageContent,
        toJournal,
        toFolder,
    },
};
export interface PageContent {
    id: string;
    name: string;
    content: string;
    title: { level: number };
}

export interface Journal {
    id: string;
    name: string;
    pages: PageContent[];
}

export interface Folder {
    id: string;
    name: string;
    subfolders: Folder[];
    entries: Journal[];
}
