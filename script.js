function calculateReward() {
    const missions = parseInt(document.getElementById('missions').value);
    const enemies = parseInt(document.getElementById('enemies').value);
    const rewardType = document.getElementById('rewardType').value;

    let totalReward = 0;

    switch (rewardType) {
        case 'gold':
            totalReward = (missions * 100) + (enemies * 10);
            break;
        case 'gems':
            totalReward = (missions * 5) + (enemies * 1);
            break;
        case 'xp':
            totalReward = (missions * 500) + (enemies * 100);
            break;
        default:
            break;
    }

    document.getElementById('totalReward').textContent = totalReward;
}
