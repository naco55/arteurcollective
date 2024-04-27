import Head from 'next/head';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="text-black flex-1 max-w-xl mx-auto p-4 space-y-6">
            <div className="text-center pt-20">
                <p className="text-lg">
                    <a href="https://www.instagram.com/arteurcollective/">@arteurcollective</a>
                </p>
                <p className="text-lg mt-4 pt-20 pr-60">
                    <strong>want to be featured?</strong>
                </p>
                <p>
                    <a href="mailto:arteur.collective@gmail.com" className="underline text-black-600">arteur.collective@gmail.com</a>
                </p>
            </div>
        </div>
    );
}
