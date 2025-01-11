import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Donation() {
  return (
    <section id="donation" className="py-20 bg-gradient-to-b from-pista-100 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-mauve-800">Support Our Cause</h2>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-mauve-700">Donation Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>Bank Name:</strong> UCO BANK</p>
              <p><strong>Account Number:</strong> 02430210003008</p>
              <p><strong>Account Holder Name:</strong> Divya Jyoti Darshan</p>
              <p><strong>IFSC Code:</strong> UCBA0000243</p>
            </div>
            <div className="mt-8">
              <p className="text-center text-gray-700 mb-4">Your support helps us continue our mission to empower underprivileged communities in Jharkhand.</p>
              <Button className="w-full bg-mauve-600 hover:bg-mauve-700">Make a Donation</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

