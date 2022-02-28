import React, { ReactElement } from "react";

interface Props {}

export default function Majestic({}: Props): ReactElement {
  return (
    <div className="m-10 p-10 bg-white roudned-md prose">
      <h1>Majestic is a GUI for Jest</h1>
      <ul>
        <li>✅ Run all the tests or a single file</li>
        <li>⏱ Toggle watch mode</li>
        <li>📸 Update snapshots</li>
        <li>❌ Examine test failures as they happen</li>
        <li>⏲ Console.log() to the UI for debugging</li>
        <li>🚔 Built-in coverage report</li>
        <li>🔍 Search tests</li>
        <li>💎 Works with flow and typescript projects</li>
        <li>📦 Works with Create react app</li>
      </ul>

      <div className="p-3 mt-10 bg-slate-100 rounded-lg">
        <code>
          cd ./my-jest-project # go into a project with Jest
          <br />
          npx majestic # execute majestic
        </code>
      </div>
    </div>
  );
}
