let superTeam = {
    title: prompt("Titile your team: "),
    leader: prompt("You'r leader: "),
    members: prompt("Member's in you'r team: "),
    memberCount: function() {
        superTeam.members.length;
    },
    agenda: prompt("Write you'r agenda: "),
    isEvil: Boolean(prompt("you'r team is Evil?(If yes - write yes, if no - please click key Esc)"))
}

alert(`Here's the team:
name - ${superTeam.title}
leader - ${superTeam.leader}
members - ${superTeam.members}
memberCount - ${superTeam.memberCount()}
agenda - ${superTeam.agenda}
isEvil - ${superTeam.isEvil}`);