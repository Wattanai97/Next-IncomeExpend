export default function GameLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="game-layout">
        <header className="game-header">
          <h1 className="text-center my-4 font-black xxs:text-2xl xs:text-4xl sm:text-4xl">Game Page Header</h1>
        </header>
        <main>{children}</main>
      </div>
    );
  }
  