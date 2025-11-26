const Title = ({ name }: { name: string }) => {
  return (
    <div>
      <h2 className="text-center py-6 text-3xl font-bold mb-4 text-primary underline underline-offset-8">
        {name}
      </h2>
    </div>
  );
};

export default Title;
