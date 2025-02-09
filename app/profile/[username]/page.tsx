import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default async function ProfilePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <div className="container py-6 md:py-10 lg:py-12 mx-auto">
          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <div>
              <div className="flex items-center gap-6">
                <Avatar className="w-24 h-24 mb-4 md:mb-0">
                  <AvatarImage
                    src={"/placeholder-user.jpg"}
                    alt="Acme Inc Profile"
                  />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold">SampleUser</h1>
                  <div className="text-muted-foreground">@SampleUser</div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 text-muted-foreground">
                <div>
                  <MapPinIcon className="w-4 h-4 mr-1 inline" />
                  xxxxxxxxx
                </div>
                <div>
                  <LinkIcon className="w-4 h-4 mr-1 inline" />
                  xxxxxx.com
                </div>
              </div>
              <div className="mt-6 flex items-center gap-6">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">10</div>
                  <div className="text-muted-foreground">Posts</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">300</div>
                  <div className="text-muted-foreground">Followers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold">100</div>
                  <div className="text-muted-foreground">Following</div>
                </div>
              </div>

              <div className="mt-6 h-[500px] overflow-y-auto">
                Time Line Here
              </div>
            </div>
            <div className="sticky top-14 self-start space-y-6">
              <Button className="w-full">Follow</Button>
              <div>
                <h3 className="text-lg font-bold">Suggested</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Acme Inc</div>
                      <div className="text-muted-foreground text-sm">
                        @acmeinc
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Acme Inc</div>
                      <div className="text-muted-foreground text-sm">
                        @acmeinc
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Acme Inc</div>
                      <div className="text-muted-foreground text-sm">
                        @acmeinc
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="ml-auto">
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
