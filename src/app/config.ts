import { Injectable } from "@angular/core";

@Injectable()
export class Config {
    static readonly host:string             = window.location.host;
    static readonly production:boolean      = true;

    // --------------------------------------------
    // ----------- PRODUCTION ---------------------
    // --------------------------------------------
    static readonly api_production:string           = "https://api.estilosfrescos.xyz/personal_loans/services/";
    static readonly url_socket_production:string    = "";
    static readonly port_socket_production:string   = "";
    
    // --------------------------------------------
    // ----------- DEVELOPMENT --------------------
    // --------------------------------------------
    static readonly api_local:string                = "http://localhost:5000/";
    static readonly api_development:string          = "https://localhost:5000/";
    static readonly url_socket_development:string   = "";
    static readonly port_socket_development:string  = "";
    
    // --------------------------------------------
    // ----------- KEYS ---------------------------
    // --------------------------------------------
    static readonly brand:string            = "KSP";
    static readonly application:string      = "KSP";
    static db_name:string                   = "app_ksp";   
    static readonly project_name:string     = "KSP";
    static readonly project_version:string  = "dev-2.0";
    static readonly google_key:string       = "AIzaSyA7g5fNOs53n9P77WkB7wm6sFW17LstRlc";
    static format_language_id:string        = "";    
    static language:string                  = "spanish";
    static lang:string                      = "es";
    static readonly VAPID_PUBLIC_KEY        = "";
    // --------------------------------------------
    // ----------- SETTINGS -----------------------
    // --------------------------------------------
    
    static api_url:string                   = (Config.host.toLocaleLowerCase().includes("localhost"))? Config.api_local : (Config.host.toLocaleLowerCase().includes("test"))? Config.api_development : Config.api_production;   
    static api_url_socket:string            = (Config.host.toLocaleLowerCase().includes("localhost"))? Config.url_socket_development : (Config.host.toLocaleLowerCase().includes("test"))? Config.url_socket_development : Config.url_socket_production;   
    static port_socket:string               = (Config.host.toLocaleLowerCase().includes("localhost"))? Config.port_socket_development : (Config.host.toLocaleLowerCase().includes("test"))? Config.port_socket_development : Config.port_socket_production;    // static api_url:string                   = Config.api_production;
    
    // --------------------------------------------
    // ----------- SETTINGS FORCE -----------------
    // --------------------------------------------
    // static api_url:string               = Config.api_local;
    // static port_socket:string           = Config.port_socket_production;
    // static api_url_socket:string        = Config.url_socket_production;
}