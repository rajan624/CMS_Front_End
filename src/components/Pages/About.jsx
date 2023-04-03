import ContactForm from "../ContactForm/ContactForm";
import logo from "../../images/Logo/logo1.jpeg"
import classes from "./About.module.css";
import { Grid, Typography } from "@material-ui/core";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <Fade left className={classes.container}>
      {/* Heading */}
      <div className={classes.heading}>
        <Typography variant="h2" component="h2" align="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, repellat!
        </Typography>
        <Typography variant="h4" align="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, minima?        </Typography>
      </div>
      {/* Grid Start */}
      <Grid container className={classes.contentBox}>
        <Grid spacing="1" item lg={4} className={classes.logo}>
          <img src={logo} alt="logo epo" />
        </Grid>
        <Grid spacing="1" item lg={8} className={classes.intro}>
          <Typography variant="h4">Who We Are</Typography>
          <Typography paragraph variant="caption">
            We Protect The Nature
          </Typography>
          <Typography
            p="5"
            spacing="2"
            paragraph
            margin="small"
            variant="body1"
            align="justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            saepe esse repellendus, necessitatibus in, magnam aliquam inventore
            modi quidem a eaque. Nostrum officiis tenetur, dicta similique
            corporis doloribus repellat! Quam corporis, perferendis amet qui
            repellendus magni nesciunt ab dignissimos commodi asperiores
            exercitationem nostrum inventore quasi aspernatur recusandae sequi.
            Similique accusantium dolores ut odit aut autem! Enim dicta rerum
            amet placeat, cum sint commodi rem. Deleniti illum pariatur ea ab
            libero totam architecto nihil doloremque velit autem, necessitatibus
            error magnam delectus maxime nobis tempore eligendi, quas officia
            numquam placeat aliquid dignissimos ut. Perferendis dolorum sint,
            quos modi dolorem repellat. Quia amet perferendis odio dignissimos
            fuga reprehenderit hic fugit sunt itaque totam molestiae minima vel,
            iure ab quae consectetur temporibus, officia enim. Dolorem eum
            fugiat omnis, suscipit doloremque nam natus nemo! Porro, facere
            quidem consectetur amet fugit doloremque reiciendis, repellat
            blanditiis in nihil unde ipsam, adipisci natus beatae laboriosam
            odit deleniti. Suscipit iste obcaecati vitae incidunt, velit dicta
            neque fugiat eos, unde voluptates recusandae debitis, facilis porro
            saepe eligendi similique blanditiis nihil accusantium! Placeat
            obcaecati quo optio, amet perspiciatis eligendi. Expedita quisquam
            quia excepturi vel veniam, asperiores laboriosam hic vitae sapiente
            facere, aut ratione reiciendis eos dolorem, debitis incidunt animi
            perspiciatis. Aperiam, sit assumenda corrupti libero est in eaque
            laborum reprehenderit veritatis! Dignissimos pariatur doloribus
            expedita corporis iusto fuga ea itaque saepe ipsam alias ab tenetur
            sint officiis nihil aspernatur vel nisi beatae praesentium harum
            sequi eos, obcaecati labore assumenda dolorum. Cum nostrum dicta
            dolore dolor maxime repellat! Quibusdam ratione nisi nostrum.
          </Typography>
        </Grid>
      </Grid>
      {/* Mission */}
      <Grid className={classes.contentBox} spacing="1" item lg={12}>
        <Typography variant="h3" align="center">
          Mission
        </Typography>
        <Typography
          className={classes.paragraph}
          variant="body1"
          component="p"
          align="center"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa repellendus accusamus iure labore dignissimos.
        </Typography>
      </Grid>

      {/* Vision */}
      <Grid className={classes.contentBox} spacing="1" item lg={12}>
        <Typography variant="h3" align="center">
          Vision
        </Typography>
        <Typography
          className={classes.paragraph}
          variant="body1"
          component="p"
          align="center"
        >
          Environmental Protection Organizaiton envisions a Sustainable clean
          and Healthy society
        </Typography>
      </Grid>
      {/* Goal */}
      <Grid className={classes.contentBox} spacing="1" item lg={12}>
        <Typography variant="h3" align="center">
          Goal
        </Typography>
        <Typography
          className={classes.paragraph}
          variant="body1"
          component="p"
          align="center"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus dolorum eveniet eligendi quisquam nisi voluptate ducimus quo ipsa, ipsum id. Soluta corporis labore, deserunt ipsa aut voluptas quam eligendi!
        </Typography>
      </Grid>
      {/* Values */}
      <Grid className={classes.contentBox} spacing="1" item lg={12}>
        <Typography variant="h3" align="center">
          Our Values
        </Typography>
        <ul className={classes.values}>
          <li>Protect the Nature</li>
          <li>Trees For Life</li>
          <li>Prevent The Blindness</li>
          <li>Community Empowerment</li>
          <li>Gender Justice</li>
          <li>
            Equity and Justice, to ensure that everyone – irrespective of sex,
            age, race, color, creed, class and religion
          </li>
        </ul>
      </Grid>

      <ContactForm showText={true} />
    </Fade>
  );
};

export default About;
