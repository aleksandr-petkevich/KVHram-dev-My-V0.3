import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    ping(): {
        status: string;
        timestamp: string;
    };
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
