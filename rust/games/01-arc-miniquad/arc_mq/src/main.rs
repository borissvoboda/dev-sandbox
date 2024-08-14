use miniquad::*;

// Struct is a custom data type  for data grouping.
// Player has two properties - x and y position
struct Player {
    x: f32,
    y: f32,
}

// Why STAGE???
// 
struct Stage {
    player: Player,
}

impl Stage {
    fn new() -> Stage {
        Stage {
            player: Player { x: 100.0, y: 100.0 },
        }
    }
}

impl EventHandler for Stage {
    fn update(&mut self, _ctx: &mut Context) {
        // Update player position here
    }

    fn draw(&mut self, ctx: &mut Context) {
        ctx.clear(Some((1.0, 1.0, 1.0, 1.0)), None, None); // White color
        // Here you would draw the player at its current position
        ctx.commit_frame();
    }
}

fn main() {
    miniquad::start(conf::Conf::default(), |mut ctx| {
        Box::new(Stage::new())
    });
}