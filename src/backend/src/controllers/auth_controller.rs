use salvo::prelude::*;
use serde::Deserialize;

#[derive(Deserialize)]
pub struct LoginRequest {
    pub username: String,
    pub password: String,
}

#[handler]
pub async fn login(req: &mut Request, res: &mut Response) {
    let login_req: Option<LoginRequest> = req.parse_json().await.ok();
    if let Some(login_req) = login_req {
        // Demo: accept any username/password
        if !login_req.username.is_empty() && !login_req.password.is_empty() {
            // In real app, set session/cookie here
            res.render(Text::Plain("Login successful"));
            return;
        }
    }
    res.status_code(StatusCode::UNAUTHORIZED);
    res.render(Text::Plain("Invalid credentials"));
}

#[handler]
pub async fn logout(_req: &mut Request, res: &mut Response) {
    // Demo: just respond, in real app clear session/cookie
    res.render(Text::Plain("Logout successful"));
}
