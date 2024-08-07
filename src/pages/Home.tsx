import {
  Header,
  Hero,
  Feature,
  Supplements,
  Planner,
  Cta,
  Contact,
} from "../components";
function Home() {
  return (
    <>
      <div className="landing">
        <Header />
        <Hero />
      </div>
      <Feature />
      <Supplements />
      <Planner />
      <Cta />
      <Contact />
    </>
  );
}

export default Home;
