import { Alert, AlertTitle, AlertDescription} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

export default function Page(){
    return <>
           

            <div className="gird gap-3">
               
               <Alert variant={"destructive"}>
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        You can add components to your app using the cli.
                    </AlertDescription>
                </Alert>

                <Alert variant={"success"}>
                    <RocketIcon className="h-4 w-4" />
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                        You can add components to your app using the cli.
                    </AlertDescription>
                </Alert>
              
               
            </div>
    </>
        
    
}