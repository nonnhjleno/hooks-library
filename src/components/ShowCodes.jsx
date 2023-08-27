import React, { useState } from 'react';
import { Octokit } from "@octokit/core";
import ACCESS_TOKEN from '../access_token';

const octokit = new Octokit({ auth: ACCESS_TOKEN });

function ShowCodes(props) {
  const [code, setCode] = useState("");

  async function fetchCode() {
    try {
      const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'nonnhjleno',
        repo: 'hooks-library',
        path: 'src/components/' + props.filename
      });
      setCode(decodeURIComponent(escape(atob(response.data.content))));
    } catch (error) {
      console.error(error);
    }
  }
  fetchCode();


  return (
    <div>
      <pre className='mt-5 p-5 bg-slate-200'>{code}</pre>
    </div>
  );
}

export default ShowCodes;
