import CreateUser from '../users/CreateUser';

function Home() {
  return (
    <div className="my-10 px-4 text-center font-semibold sm:my-16">
      <h1 className="mb-8  text-xl md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-400 ">
          {' '}
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
