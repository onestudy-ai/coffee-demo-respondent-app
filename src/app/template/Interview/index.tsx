"use client";

import { useState } from "react";

import { EmbedWrapper } from "@/app/components/EmbedWrapper";
import { ModeToggle } from "@/app/components/ModeToggle";
import { Button } from "@/app/components/ui/button";
import ConversationWrapper from "@/app/template/Interview/ConversationWrapper";
import { Interview } from "@/core/interview";

interface InterviewProps {
	interview?: Interview | null;
}

export const InterviewWrapper = (props: InterviewProps) => {
	const [watchedEmbed, setWatchedEmbed] = useState(false);

	return (
		<div className="relative isolate overflow-hidden dark:bg-stone-950 min-h-screen flex-col items-center justify-between">
			{/* Header */}
			<div className="w-full flex justify-between items-center px-3 py-5">
				<div className="flex items-center">
					<div className="font-bold text-sm px-3 ml-3 text-center">
						<span>{props.interview?.study?.meta?.shareTitle || "We need your feedback!"}</span>
					</div>
				</div>

				<div className="">
					<ModeToggle />
				</div>
			</div>

			{/* Embed link if present */}
			{props.interview?.study?.meta?.embedUrls && !watchedEmbed ? (
				<div className="w-full flex flex-col justify-center items-center px-3 py-5">
					<EmbedWrapper url={props.interview?.study?.meta?.embedUrls[0]} />

					<Button className="mt-5" size="lg" onClick={() => setWatchedEmbed(true)}>
						Continue
					</Button>
				</div>
			) : (
				<div className="mx-auto px-2 pb-24 pt-5 lg:pt-20 sm:pb-32 lg:flex lg:px-8">
					<div className="flex w-full flex-1 flex-col items-center">
						<ConversationWrapper interview={props.interview} />
					</div>
				</div>
			)}

			{/* Footer */}
			<div className="absolute inset-x-0 bottom-0">
				<div className="flex items-center justify-between m-5 text-xs text-gray-400">
					<a href="https://onestudy.ai">Powered by <strong>OneStudy</strong></a>
				</div>
			</div>
		</div>
	);
};
