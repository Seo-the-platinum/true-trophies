type User = {
    games: Game[];
    accountId?: string;
    country?: string;
    language?: string;
    onlineId?: string;
    isPsPlus?: boolean;
    isOfficiallyVerified?: boolean;
    avatarUrl?: string;
    verifiedUserName?: string;
    highlights?: {
        onlineId: string[];
    };
}

type Game = {
    definedTrophies: TrophyCounts;
    earnedTrophies: TrophyCounts;
    hasTrophyGroups: boolean; 
    hiddenFlag: boolean;
    lastUpdatedDateTime: string;
    npCommunicationId: string;
    npServiceName: string;
    progress: number;
    trophySetVersion: string;
    trophyTitleDetail?: string;
    trophyTitleIconUrl: string;
    trophyTitleName: string;
    trophyTitlePlatform: string;
}

type TrophyCounts = {
    bronze: number;
    gold: number;
    platinum: number;
    silver: number;
}
