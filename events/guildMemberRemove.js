module.exports = member => {
  let guild = member.guild;
  member.send(':( Neden çıktın kral :(');
  guild.defaultChannel.send(`${member.user.username} gitti.`);
};
