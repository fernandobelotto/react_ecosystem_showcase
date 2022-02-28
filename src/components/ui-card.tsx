import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Repo } from "../types/repo";

import { AiFillStar } from "react-icons/ai";
import { CgEye, CgGitFork } from "react-icons/cg";
import { IoWarningOutline } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";

export function Card({ title, description, link }: any) {
  const [repoData, setRepoData] = useState<Repo | null>(null);

  const fetchRepoData = async () => {
    const axiosConfig = {
      headers: {
        Authenticator: `token ghp_16C7e42F292c6912E7710c838347Ae178B4a`,
      },
    };

    const parsedLink = link
      .replace(".com/", ".com/repos/")
      .replace("github", "api.github");
    try {
      // const { data } = await axios.get(parsedLink);
      // setRepoData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRepoData();
  }, [link]);

  return (
    <div
      className="hover:no-underline
        group w-100 border  border-neutral-100 text-left p-5 rounded-md  transition-all hover:bg-white hover:shadow-xl hover:ease-in-out duration-300 hover:scale-105
        dark:shadow-white/20"
    >
      <p className="text-black text-xl dark:group-hover:text-blacktransition-all duration-300  w-auto">
        <Link
          to={`/${title}`}
          className={`hover:no-underline hover:text-blue-500`}
        >
          {title}
        </Link>
      </p>

      <a
        href={link}
        target="_blank"
        className="flex w-auto mt-2 flex-row items-center hover:no-underline text-black text-md dark:group-hover:text-blacktransition-all duration-300"
      >
        <AiFillGithub />
        {" repo"}
      </a>
      {description ? (
        <p className="text-xs mt-2 text-gray-600">{description}</p>
      ) : null}

      {repoData ? (
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="flex-row flex items-center">
              <AiFillStar /> {repoData.stargazers_count}
            </p>
          </div>
          <div>
            <p className="flex-row flex items-center">
              {" "}
              <CgGitFork /> {repoData.forks_count}
            </p>
            <p className="flex-row flex items-center">
              <IoWarningOutline /> {repoData.open_issues_count}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
