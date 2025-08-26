import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  MessageSquare,
  Check,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { timeSlots, isSlotAvailable, addAppointment } from "../data/mock";

const AppointmentSection = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [observations, setObservations] = useState("");
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const formatDate = (date) => {
    if (!date) return "";
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateForStorage = (date) => {
    if (!date) return "";
    return date.toISOString().split("T")[0];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate && selectedTime && clientName && clientPhone) {
      setShowConfirmModal(true);
    }
  };

  const confirmAppointment = () => {
    const appointment = {
      date: formatDateForStorage(selectedDate),
      time: selectedTime,
      clientName,
      clientPhone,
      observations,
    };

    // Add to mock data
    addAppointment(appointment);

    // Generate WhatsApp message
    const message = `Olá! Acabei de agendar um horário:

Data: ${formatDate(selectedDate)}
Horário: ${selectedTime}
Nome: ${clientName}
Telefone: ${clientPhone}
${observations ? `Observações: ${observations}` : ""}`;

    const whatsappUrl = `https://wa.me/5511963065438?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setSelectedDate(null);
    setSelectedTime("");
    setClientName("");
    setClientPhone("");
    setObservations("");
    setShowConfirmModal(false);
  };

  const getAvailableSlots = () => {
    if (!selectedDate) return timeSlots;
    const dateStr = formatDateForStorage(selectedDate);
    return timeSlots.filter((time) => isSlotAvailable(dateStr, time));
  };

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 60); // Allow bookings up to 60 days ahead

  return (
    <section
      id="agendamento"
      className="py-20 bg-gradient-to-br from-pink-50 via-white to-rose-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-pink-500 mb-4">
            <CalendarIcon className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Agende seu Horário
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforme suas unhas
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent block">
              hoje mesmo
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha a data e horário que melhor se adequa à sua agenda.
            Atendemos de segunda à sábado, das 8h às 18h.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-pink-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calendar Section */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg font-semibold text-gray-900 flex items-center space-x-2 mb-4">
                      <CalendarIcon className="w-5 h-5 text-pink-500" />
                      <span>Escolha a Data</span>
                    </Label>
                    <div className="border border-pink-200 rounded-2xl p-4 bg-gradient-to-br from-pink-50 to-rose-50">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < today || date > maxDate}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <div>
                      <Label className="text-lg font-semibold text-gray-900 flex items-center space-x-2 mb-4">
                        <Clock className="w-5 h-5 text-pink-500" />
                        <span>Horários Disponíveis</span>
                      </Label>
                      <div className="grid grid-cols-3 gap-3">
                        {getAvailableSlots().map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`p-3 rounded-xl border-2 font-semibold transition-all duration-200 ${
                              selectedTime === time
                                ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-500 shadow-lg transform scale-105"
                                : "bg-white border-pink-200 text-gray-700 hover:border-pink-400 hover:bg-pink-50"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                      {getAvailableSlots().length === 0 && (
                        <p className="text-gray-500 text-center py-8">
                          Nenhum horário disponível para esta data. Tente outra
                          data.
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Form Section */}
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg font-semibold text-gray-900 flex items-center space-x-2 mb-4">
                      <User className="w-5 h-5 text-pink-500" />
                      <span>Seus Dados</span>
                    </Label>

                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700 mb-2 block"
                        >
                          Nome Completo *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Seu nome completo"
                          required
                          className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:ring-0 transition-colors duration-200"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-sm font-medium text-gray-700 mb-2 block"
                        >
                          Telefone/WhatsApp *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          placeholder="(11) 99999-9999"
                          required
                          className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:ring-0 transition-colors duration-200"
                        />
                      </div>

                      <div>
                        <Label
                          htmlFor="observations"
                          className="text-sm font-medium text-gray-700 mb-2 flex items-center space-x-2"
                        >
                          <MessageSquare className="w-4 h-4 text-pink-500" />
                          <span>Observações (Opcional)</span>
                        </Label>
                        <Textarea
                          id="observations"
                          value={observations}
                          onChange={(e) => setObservations(e.target.value)}
                          placeholder="Alguma preferência especial ou observação?"
                          rows={4}
                          className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 focus:ring-0 transition-colors duration-200 resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={
                      !selectedDate ||
                      !selectedTime ||
                      !clientName ||
                      !clientPhone
                    }
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    Agendar Horário
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Confirmation Modal */}
        <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
          <DialogContent className="max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-gray-900 mb-4">
                Confirmar Agendamento
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200">
                <p className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  Detalhes do Agendamento
                </p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Data:</span>
                    <span className="font-medium">
                      {formatDate(selectedDate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Horário:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nome:</span>
                    <span className="font-medium">{clientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Telefone:</span>
                    <span className="font-medium">{clientPhone}</span>
                  </div>
                  {observations && (
                    <div className="pt-2 border-t border-pink-200">
                      <span className="text-gray-600 text-xs">
                        Observações:
                      </span>
                      <p className="text-sm mt-1">{observations}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <p className="text-sm text-blue-800 text-center">
                  <strong>Atenção:</strong> Ao confirmar, você será
                  redirecionada para o WhatsApp para finalizar o agendamento com
                  a Kamile.
                </p>
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Voltar
                </Button>
                <Button
                  onClick={confirmAppointment}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
                >
                  Confirmar e Ir ao WhatsApp
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AppointmentSection;
