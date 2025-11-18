LottieInteractivity.create({
    player: "#firstLottie",
    mode:"cursor",
    container: "#overlay",
    actions: [
        {
            position: { x: [0, 1], y: [0,1] },
            type: "seek",
            frames: [0, 72]
        }
    ]
});
