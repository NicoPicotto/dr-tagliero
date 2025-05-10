const Container = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className='container max-w-[1440px] mx-auto px-4'>{children}</div>
   );
};

export default Container;
