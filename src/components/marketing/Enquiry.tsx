import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    service: z.string().min(1, "Please select a service"),
    eventDate: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Enquiry = ({ title, btnTitle = "Submit" }: { title: string, btnTitle?: string }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            eventDate: "",
            service: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log("Form data:", data);

        toast({
            title: "Message sent successfully!",
            description: "We'll get back to you within 24 hours.",
        });

        form.reset();
        setIsSubmitting(false);
    };

    return (
        <div className="w-full bg-white/70 rounded-2xl shadow-2xl py-6 px-5">
            {/* Form Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 font-playfair">
                {title}
            </h3>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-6"
                >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base">Full Name *</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Your name"
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base">Phone Number *</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="+91 XXXXXXXXXX"
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base">Email *</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="your@email.com"
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="eventDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base">Event Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="date"
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Service Select */}
                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-base">Service *</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="luxury-bridal-makeup-main-event">
                                                LUXURY BRIDAL MAKEUP (MAIN EVENT)
                                            </SelectItem>
                                            <SelectItem value="engagement-sangeet-mehendi">
                                                ENGAGEMENT, SANGEET, MEHENDI
                                            </SelectItem>
                                            <SelectItem value="haldi-wedding-reception-look">
                                                HALDI, WEDDING, RECEPTION LOOK
                                            </SelectItem>
                                            <SelectItem value="destination-bridal-package">
                                                DESTINATION BRIDAL PACKAGE
                                            </SelectItem>
                                            <SelectItem value="pre-wedding-looks">
                                                PRE-WEDDING LOOKS
                                            </SelectItem>
                                            <SelectItem value="bridal-trial-consultation-session">
                                                BRIDAL TRIAL, CONSULTATION SESSION
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center items-center bg-primary text-white px-6 rounded-md shadow-md hover:shadow-xl hover:bg-[#b8965f] transition-all duration-300 font-semibold text-xl py-6"
                    >
                        {isSubmitting ? (
                            "Sending..."
                        ) : (
                            <>
                                {btnTitle} <Send className="ml-1" size={16} />
                            </>
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default Enquiry;
