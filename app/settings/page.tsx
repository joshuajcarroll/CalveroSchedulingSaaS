import { sanityFetch } from "@/sanity/lib/live";
import { auth } from "@clerk/nextjs/server";

async function SettingsPage() {
  const { userId } = await auth();

  //1.How many accounts are connected fir the user?
  //2.Get the user's plan limits
  const [{ data: user }, planLimits] = await Promise.all([
    sanityFetch({
      query: USER_CONNECTED_ACCOUNTS_DISPLAY_QUERY,
      params: { clerkId: userId },
    }),
    getUserPlanLimits(),
  ]);

  return <div>SettingsPage</div>;
}

export default SettingsPage;
