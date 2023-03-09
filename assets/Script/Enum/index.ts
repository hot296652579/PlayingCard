/**类型枚举 */
export enum EnumSuit {
    HeiTao = 'HeiTao',
    HongTao = 'HongTao',
    MeiHua = 'MeiHua',
    FangKuai = 'FangKuai',
}

export enum ESuitNum {
    HeiTao = 0,
    HongTao = 1,
    MeiHua = 2,
    FangKuai = 3,
}

export enum ENumSiut {
    HeiTao,
    HongTao,
    MeiHua,
    FangKuai
}

export enum ECardDir {
    CLOSE = 0,
    OPEN = 1
}

/**游戏事件枚举*/
export enum EventGame_Enum {
    EVENT_RESTART_GAME = 'EVENT_RESTART_GAME',
    EVENT_GAME_INIT = 'EVENT_GAME_INIT',
    EVENT_GAME_START = 'EVENT_GAME_START',
    EVENT_GAME_INIT_GROUP = 'EVENT_GAME_INIT_GROUP',
    EVENT_PLAYAREA_TO_RECEIVE = 'EVENT_PLAYAREA_TO_RECEIVE',

    //玩牌区到左上方收牌区数据更新事件
    EVENT_PLAYAREA_TO_RECEIVE_UPDATE_DB = 'EVENT_PLAYAREA_TO_RECEIVE_UPDATE_DB',
    EVENT_PLAYAREA_TO_RECEIVE_UPDATE_VIEW = 'EVENT_PLAYAREA_TO_RECEIVE_UPDATE_VIEW',

    //右上方关闭区到打开区数据更新事件
    EVENT_CLOSEAREA_TO_OPEN_UPDATE_DB = 'EVENT_CLOSEAREA_TO_OPEN_UPDATE_DB',
    EVENT_CLOSEAREA_TO_OPEN_UPDATE_VIEW = 'EVENT_CLOSEAREA_TO_OPEN_UPDATE_VIEW',

    //打开区域到收牌区数据更新事件
    EVENT_OPEN_TO_RECEIVE_UPDATE_DB = 'EVENT_OPEN_TO_RECEIVE_UPDATE_DB',
    EVENT_OPEN_TO_RECEIVE_UPDATE_VIEW = 'EVENT_OPEN_TO_RECEIVE_UPDATE_VIEW',

    EVENT_OPEN_TOPPOKER_UPDATE_VIEW = 'EVENT_OPEN_TOPPOKER_UPDATE_VIEW',

    //从open区到了close区 刷新close数据
    EVENT_OPEN_TO_CLOSE_UPDATE_VIEW = 'EVENT_OPEN_TO_CLOSE_UPDATE_VIEW',
}
