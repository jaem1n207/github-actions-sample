export default function Page() {
  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-zinc-500">Testing</div>

      <ul className="pl-4 space-y-2 text-sm list-disc text-zinc-300">
        <li>Test Query with Router</li>
      </ul>

      <div>
        <a
          className="font-medium text-zinc-300 hover:text-white"
          href="https://beta.nextjs.org/docs/styling/css-modules"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
