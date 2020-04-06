import { Helper } from "./Helper";
import * as vscode from "vscode";

export class FileData {
    filePath: string;
    fileUri: string;

    constructor() {
        this.filePath = Helper.getFilePath();
        this.fileUri = Helper.getFileUri();
    }
}

export class Configuration {
    debug: boolean;
    eraseGhost: boolean;
    unparse: boolean;
    printInternal: boolean;
    printViper: boolean;
    parseOnly: boolean;
    logLevel: string;

    constructor(config: vscode.WorkspaceConfiguration) {
        this.debug = config.get("debug");
        this.eraseGhost = config.get("eraseGhost");
        this.unparse = config.get("unparse");
        this.printInternal = config.get("printInternal");
        this.printViper = config.get("printViper");
        this.parseOnly = config.get("parseOnly");
        this.logLevel = config.get("loglevel");
    }
}

export class VerifierConfig {
    fileData: FileData;
    config: Configuration;

    constructor() {
        this.fileData = new FileData();
        this.config = new Configuration(Helper.getGobraConfiguration());
    }

    private updateConfig(): void {
        let config = Helper.getGobraConfiguration();
        this.config = new Configuration(config);
    }
}

export class VerificationResult {
    success: boolean;
    error: string;

    constructor(success: boolean, error: string) {
        this.success = success;
        this.error = error;
    }
    
}