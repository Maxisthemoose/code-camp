import { Snowflake } from "discord.js";
import { Document } from "mongoose";
import Infraction from "../../../Interfaces/Infraction";
import Mute from "../../../Interfaces/Mute";

export default interface guild extends Document {
    gId: Snowflake;

    logChannel?: string | null;

    infractionNumber?: number;

    infractions?: Array<Infraction>;

    modRoles_Users?: Array<Snowflake>;

    muteRole?: Snowflake;

    mutedUsers?: Array<Mute>;

    welcomeInfo?: {
        id: Snowflake;
        message: string;
        rolesToAdd: Array<Snowflake>;
    };
}