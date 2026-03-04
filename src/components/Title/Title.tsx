const Title = ({ name }: { name: string }) => {
  return (
    <div className="mb-10">
      <h2 className="text-center text-3xl md:text-4xl font-bold gradient-text py-2">
        {name}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-2">
        <div className="h-px w-16 bg-linear-to-r from-transparent to-primary/40" />
        <div className="h-1 w-1 rounded-full bg-primary/50" />
        <div className="h-px w-16 bg-linear-to-l from-transparent to-primary/40" />
      </div>
    </div>
  );
};

export default Title;
