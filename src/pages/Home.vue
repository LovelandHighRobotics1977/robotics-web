<template>
  <div class="content">
    <title>Loveland High School Robotics</title>
    <div class="short_syn">
      <center>
        <h3>
          Welcome to the Loveland High School Robotics FIRST Team 1977 the Powersquids!
          <br>We are a student led program dedicated to investigating, planning, creating, and
          leading.
        </h3>
      </center>
    </div>
    <div class="video-container">
      <center>
        <div class="video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/8mz_f2Z2RDM?autoplay=0&enablejsapi=1&modestbranding=1&showinfo=0&theme=light&controls=0&disablekb=1"
            frameborder="0"
          ></iframe>
        </div>
      </center>
    </div>
    <div class="home-desc">
      <center>
        <p>
          We compete in the annual FIRST Robotics competition each Spring at Denver University. Starting from scratch,
          each year we brainstorm and collaborate to create a robot in six weeks to compete. Aside from competing, we also
          host a summer camp to provide younger students with an opportunity to build and run through the design process
          similar to our team for competition.
        </p>
      </center>
    </div>

    <div class="home-desc quotes">
      <center>
        <h2>Member Quotes</h2>
      </center>
      <center v-for="quote of quotes" v-bind:key="quote">
        <p class="quote">
          "{{ quote.text }}"
          <br>- {{ quote.author.title }}, {{ quote.author.name }} ({{ quote.author.grad }} grad)
        </p>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      quotes: [
        {
          text: "The Loveland Robotics team is efficient, proficient, sufficient, omniscient and hard-working. When I joined the robotics team as a young man (oh, it seemed to be a lifetime ago), I saw the promise and dedication in the faces and work-ethic of these individuals known to me now as my peers.",
          author: {
            title: "Programming Team Co-Captain",
            name: "Dylan",
            grad: 2020
          }
        },
        {
          text: "Robotics is super awesome!",
          author: {
            title: "CAD Team Member",
            name: "Lexi",
            grad: 2021
          }
        },
        {
          text: "Being a part of the Loveland High Robotics Team has tought me what dedication and commitment realy means, even through the hardships.",
          author: {
            title: "Aux Captain",
            name: "Will",
            grad: 2020
          }
        }
      ]
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../stylesheets/colors.less";

.video-container {
  background: @gray6;
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-radius: 0.5rem;
}

.video {
  width: 40rem;
  height: 22.5rem;
  transition: 500ms;
  &:hover {
    transition: 500ms;
    width: 45rem;
    height: 25.4rem;
    box-shadow: -0.3rem 0.3rem 0.1rem @gray4;
  }
}

.home-desc {
  background: @gray6;
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-radius: 0.5rem;
}

.short_syn {
  background: @gray7;
  margin-top: 0.8rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  border-radius: 0.5rem;
}

.quotes {
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
}

.quote {
  width: 80%;
}
</style>

