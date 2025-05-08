import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/app/utils/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Element } from "react-scroll";
import { initializeForm } from "@/app/utils/initializeForm";
import { leadService } from "@/app/services/lead";
import { useState } from "react";
import { loader } from "../Loader";
import { PhoneInput } from "../ui/phone-input";

const Contact = () => {
  const formSchema = schema.contactFormSchema;
  const defaultValues = initializeForm.contactForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await leadService.newLeads(data);
      setSubmissionResult("¡Enviado!");
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setSubmissionResult("Error al enviar");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmissionResult(null), 3000);
    }
  };

  return (
    <div className="relative flex items-center justify-center py-10 lg:py-20 xl:py-50">
      <Image
        src="/images/VectorContact.webp"
        alt="Vector de lineas"
        width={1400}
        height={700}
        className="z-0 size-full object-cover absolute"
        priority
      />
      <section className="container mx-auto max-w-7xl my-30 lg:my-40 relative z-1 px-2.5">
        <Element name="contacto">
          <div className="flex flex-col items-center justify-center gradient-radial rounded-6xl lg:rounded-[100px] p-5 my-5 lg:py-20 shadow-2xl">
            <div className="flex flex-col items-center gap-5 text-white text-2xl md:text-4xl mb-8">
              <h1 className="font-bold uppercase">¡CONTACTANOS!</h1>
              <div className="h-px w-full max-w-[200px] lg:max-w-[414px] border-gradient mx-auto" />
              <span className="font-light text-center">
                El primer paso hacia una mejor atención
              </span>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-full max-w-4xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="first_name" className="text-white">
                          Nombres
                          <span className="text-red-400 text-xs">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="first_name"
                            placeholder="Escribí tus nombres"
                            {...field}
                            autoComplete="given-name"
                            className="text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="last_name" className="text-white">
                          Apellidos
                          <span className="text-red-400 text-xs">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="last_name"
                            placeholder="Escribí tus apellidos"
                            {...field}
                            autoComplete="family-name"
                            className="text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email" className="text-white">
                          Mail
                          <span className="text-red-400 text-xs">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            id="email"
                            placeholder="Escribí tu correo eletrónico"
                            {...field}
                            autoComplete="email"
                            className="text-white"
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
                        <FormLabel htmlFor="phone" className="text-white">
                          Teléfono
                        </FormLabel>
                        <FormControl>
                          <PhoneInput
                            placeholder="9 11 2345-6789"
                            {...field}
                            defaultCountry="AR"
                            international
                            value={field.value}
                            onChange={field.onChange}
                            autoComplete="tel"
                            className="text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="institution"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="institution" className="text-white">
                          Institución
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="institution"
                            placeholder="Colocá el nombre de tu institución"
                            {...field}
                            className="text-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lead_role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="lead_role" className="text-white">
                          ¿Quién lo va a usar?
                          <span className="text-red-400 text-xs">*</span>
                        </FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger className="w-full text-white">
                              <SelectValue placeholder="Niños, adolescentes, adultos, pacientes..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="niño">Niño</SelectItem>
                            <SelectItem value="adolescente">
                              Adolescente
                            </SelectItem>
                            <SelectItem value="adulto">Adulto</SelectItem>
                            <SelectItem value="paciente">Paciente</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="lead_type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="lead_type" className="text-white">
                        Rol
                        <span className="text-red-400 text-xs">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger className="w-full text-white">
                            <SelectValue placeholder="Selecciona el tipo de usuario" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="individual">Individual</SelectItem>
                          <SelectItem value="empresa">Empresa</SelectItem>
                          <SelectItem value="profesional">
                            Profesional
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Campo de Mensaje */}
                <FormField
                  control={form.control}
                  name="use_context"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="use_context" className="text-white">
                        Mensaje <span className="text-red-400 text-xs">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id="use_context"
                          placeholder="Queremos comprender el motivo de tu interés"
                          {...field}
                          className="resize-none text-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Checkbox */}
                <FormField
                  control={form.control}
                  name="news_letter_suscription"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 rounded-md">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          id="news_letter_suscription"
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor="news_letter_suscription"
                        className="text-sm font-normal text-white"
                      >
                        Acepto recibir información y suscribirme al Newsletter
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-center">
                  <Button
                    type="submit"
                    className="px-20"
                    isLoading={isSubmitting}
                    disabled={isSubmitting || submissionResult === "¡Enviado!"}
                  >
                    {isSubmitting ? (
                      <loader.Circular className="border-t-primary" />
                    ) : submissionResult === "¡Enviado!" ? (
                      "¡Enviado!"
                    ) : (
                      "ENVIAR"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </Element>
      </section>
    </div>
  );
};

export default Contact;
