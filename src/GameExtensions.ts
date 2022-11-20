export interface GameExtensions {
    flow: GameFlowExtensions;
}
export interface GameFlowExtensions {
    activate(targetSceneId: string): Promise<void>;
}
export const extensions = {
    flow: {
        activate: (targetSceneId: string) => Promise.resolve(),
    },
} as GameExtensions;
