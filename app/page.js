

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-white p-4">
        <h1 className="text-2xl">Doctor's Appointment</h1>
      </header>
      <main className="p-4">
        <h2 className="text-xl">Schedule an Appointment</h2>
        {/* Appointment scheduling form goes here */}
      </main>
      <footer className="bg-secondary text-white p-4">
        <p>&copy; 2023 Doctor's Appointment</p>
      </footer>
    </div>
  );
};

export default Page;
