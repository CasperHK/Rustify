use salvo::prelude::*;
use crate::controllers::health_controller::healthz;
use crate::controllers::user_controller::me;
use crate::controllers::auth_controller::{login, logout};

pub fn get_routes() -> Router {
    Router::new()
        .push(Router::with_path("/healthz").get(healthz))
        .push(Router::with_path("/me").get(me))
        .push(Router::with_path("/login").post(login))
        .push(Router::with_path("/logout").post(logout))
}
