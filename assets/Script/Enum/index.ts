/**类型枚举 */
export enum EnumSuit {
    HeiTao = 'HeiTao',
    HongTao = 'HongTao',
    MeiHua = 'MeiHua',
    FangKuai = 'FangKuai',
}

export enum ECardDir {
    CLOSE = 0,
    OPEN = 1
}

/**游戏事件枚举*/
export enum EventGame_Enum {
    EVENT_GAME_INIT = 'EVENT_GAME_INIT',
    EVENT_GAME_START = 'EVENT_GAME_START',
    EVENT_GAME_INIT_GROUP = 'EVENT_GAME_INIT_GROUP',
    EVENT_PLAYAREA_TO_RECEIVE = 'EVENT_PLAYAREA_TO_RECEIVE',

    EVENT_PLAYAREA_TO_RECEIVE_UPDATE_DB = 'EVENT_PLAYAREA_TO_RECEIVE_UPDATE_DB'
}
