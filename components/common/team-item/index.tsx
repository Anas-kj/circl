import React from "react"
import StyledTeamItem from "./styles"

interface TeamType {
  teamName: string
  teamNumber: string
  teamDescription: string
  teamMembers: string[]
}

const TeamItem: React.FC<TeamType> = ({
  teamName,
  teamNumber,
  teamDescription,
  teamMembers,
}) => {
  return (
    <StyledTeamItem>
      <span className="team-name">{teamName}</span>
      <div className="team-data">
        <h4>{teamNumber}</h4>
        <div>
          <p>{teamDescription}</p>
          <ul>
            {teamMembers.map((member) => (
              <li key={member}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
    </StyledTeamItem>
  )
}

export default TeamItem
export type { TeamType }
