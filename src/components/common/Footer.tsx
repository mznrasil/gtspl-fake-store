import Logo from "@/assets/logo.svg?react";

export const Footer = () => {
  return (
    <footer className="py-6 border-t lg:flex justify-between items-center hidden">
      <p className="text-slate-500 text-sm">
        &copy; 2024 FakeStore. All Rights Reserved.
      </p>
      <div className="flex items-center gap-2">
        <Logo className="flex size-5 shrink-0" />
        <h1 className="text-lg font-bold">
          Fake
          <span className="text-primary">Store</span>
        </h1>
      </div>
    </footer>
  );
};
