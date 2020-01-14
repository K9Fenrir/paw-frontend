import {PostMinimal} from "../../../helpers/postMinimal";

export class User {
    public username: string;
    public email: string;
    public discordID: string;
    public admin: boolean;
    public noPosts: number;
    public noFavs: number;
    public favourites: PostMinimal[];
    public uploads: PostMinimal[];

}