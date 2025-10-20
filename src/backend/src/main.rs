
use salvo::prelude::*;
use dotenv::dotenv;
use std::env;
use diesel::r2d2::{self, ConnectionManager};
use diesel::pg::PgConnection;

pub mod models;
mod controllers;
mod routes;

#[tokio::main]
async fn main() {
    dotenv().ok();
    if let Ok(db_url) = env::var("DATABASE_URL") {
        println!("Loaded DATABASE_URL: {}", db_url);
    } else {
        println!("DATABASE_URL not set in .env");
    }
    // Set up Diesel connection pool
    let manager = ConnectionManager::<PgConnection>::new(env::var("DATABASE_URL").expect("DATABASE_URL must be set"));
    let pool = r2d2::Pool::builder().build(manager).expect("Failed to create pool.");
    let router = routes::get_routes();
    println!("Starting Salvo server on 127.0.0.1:3000");
    Server::new(TcpListener::bind("127.0.0.1:3000")).serve(router).await;
}
