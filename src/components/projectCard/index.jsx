import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Collapse,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";

import React from "react";
import "./ProjectCard.css";

const ProjectCard = function ({ project }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="project-card">
      <CardHeader title={project.name} subheader={project.subtitle} />
      <CardMedia
        className="project-img"
        image={project.img}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <button>Read more</button>
        </IconButton>
        <IconButton aria-label="show more">
          <a href={project.url} rel="noopener noreferrer" target="_blank">
            <button>See Demo</button>
          </a>
        </IconButton>
      </CardActions>
      <CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {project.expandedTitle && (
            <Typography variant="h5">{project.expandedTitle}</Typography>
          )}
          {Boolean(project.description && project.description.length) &&
            project.description.map((description, i) => (
              <Typography paragraph>{description}</Typography>
            ))}
        </Collapse>
      </CardContent>
    </Card>
  );
};
export default ProjectCard;
