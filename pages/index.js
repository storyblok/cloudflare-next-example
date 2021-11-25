import Head from "next/head";
import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import { getAllPostsForHome } from "@/lib/api";

const Home = ({ allPosts, preview }) => {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<>
			<Layout preview={preview}>
				<Head>
					<title>Next.js Blog Using Storyblok as CMS</title>
				</Head>
				<Container>
					<Intro />
					{heroPost && (
						<HeroPost
							title={heroPost.content.title}
							coverImage={heroPost.content.image}
							date={heroPost.first_published_at || heroPost.published_at}
							author={heroPost.content.author}
							slug={heroPost.slug}
							excerpt={heroPost.content.intro}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container>
			</Layout>
		</>
	);
};

export const getStaticProps = async ({ preview = null }) => {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  
	return {
		props: { allPosts, preview },
	};
};

export default Home;
