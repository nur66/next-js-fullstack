import CreateUserForm from '@/components/users/CreateUserForm';

// reference use client
// https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp

// npm install mongodb

// npm install react-query

const Home: React.FC = () => {
  return (
    <div>
      <CreateUserForm />
    </div>
  );
};

export default Home;
