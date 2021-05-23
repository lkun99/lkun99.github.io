import React, { useEffect } from "react"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"

const Banner = (props) => {
  useEffect(() => {
    console.log(props)
  })
  return (
    <div className={props.classesInfo.heroContent} className="banner">
      <Container maxWidth="sm">
        <Typography component="h1" variant="h1" align="center" className="banner__heading" gutterBottom>
          Galaxy Shoe Store
        </Typography>
        <Typography variant="h5" align="center" color="#1e1c27" paragraph>
          Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short
          so folks don&apos;t simply skip over it entirely.
        </Typography>
        <div className={props.classesInfo.heroButtons}>
          <Grid container spacing={5} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" id="cta-btn" onClick={(e) => props.handleSmoothScroll(e)}>
                Check it out
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default Banner
