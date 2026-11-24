/* إعدادات اختيارية للّعبة: خدمة TURN (Metered) باش الصوت يوصل حتى بين شبكتين صعاب. */
window.CHNWA = {
  iceServers: [
    { urls: 'stun:stun.relay.metered.ca:80' },
    { urls: 'turn:global.relay.metered.ca:80', username: '87f87e595044a4811489fd64', credential: 'Rst9HVyGag84KUTv' },
    { urls: 'turn:global.relay.metered.ca:80?transport=tcp', username: '87f87e595044a4811489fd64', credential: 'Rst9HVyGag84KUTv' },
    { urls: 'turn:global.relay.metered.ca:443', username: '87f87e595044a4811489fd64', credential: 'Rst9HVyGag84KUTv' },
    { urls: 'turns:global.relay.metered.ca:443?transport=tcp', username: '87f87e595044a4811489fd64', credential: 'Rst9HVyGag84KUTv' }
  ]
};
