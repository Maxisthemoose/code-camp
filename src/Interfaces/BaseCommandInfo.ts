import { PermissionResolvable } from "discord.js";
import { categories, categoriesType } from "../util/Categories";

export default interface BaseCommandInfo {
    /**
     * The name of the command
     */
    name: string;
    /**
     * How to use the command
     */
    usage: string;
    /**
     * Any aliases the command might have
     */
    aliases?: Array<string>;
    /**
     * A short description of what the command does
     */
    description: string;
    /**
     * What category the command should be in
     */
    category: categoriesType;
    /**
     * The Discord PermissionResovable permissions required to use the command
     */
    permissions: Array<PermissionResolvable>;
    /**
     * If the command is enabled - Requires manual change
     */
    enabled?: boolean;
    /**
     * If the command is locked to bot owners only
     */
    ownerOnly?: boolean;
    /**
     * If you should log command usage
     */
    // log?: object;
    /**
     * If the command should be locked to server owners only
     */
    g_owner_only?: boolean;
} 