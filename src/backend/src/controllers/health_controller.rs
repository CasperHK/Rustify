use salvo::prelude::*;

#[handler]
pub async fn healthz(res: &mut Response) {
    res.render(Text::Plain("ok"));
}
