use salvo::prelude::*;
use crate::models::user::User;

#[handler]
pub async fn me(res: &mut Response) {
    let user = User {
        id: 1,
        username: "demo_user".to_string(),
        email: "demo@example.com".to_string(),
    };
    res.render(Json(user));
}
