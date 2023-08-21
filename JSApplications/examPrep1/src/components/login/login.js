export class loginComponent {
    constructor(authService, renderHandler, templateFunction, router) {
        this.authService = authService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.loginHandler = this.loginHandler.bind(this);
        this.showView = this._showView.bind(this);
    }

    async _showView() {
        
        let template = this.templateFunction(isUserLoggedIn, this.loginHandler);
        this.renderHandler(template);
    }

    async _loginHandler(e) {
        console.log('test');
    }
}